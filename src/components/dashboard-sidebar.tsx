import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Drawer, useTheme } from '@mui/material';
import { IconButton } from '@mui/material';
import { InputComponent } from './InputComponent';
import NavigateBefore from '@mui/icons-material/NavigateBefore';

type DashboardSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export const DashboardSidebar = ({
  open,
  onClose,
}: DashboardSidebarProps) => {
  const router = useRouter();
  const theme = useTheme();

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          paddingTop: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            position: 'sticky',
            top: '0',
            paddingTop: '2rem',
            paddingBottom: '1rem',
            backgroundColor: 'secondary.main',
            // @ts-ignore
            borderBottom: '1px solid var(--color-ui-gray-light)',
            zIndex: (theme) => theme.zIndex.appBar + 100,
          }}
        >
          <Box>
            <Box className="font--headline font-md3 font-bold">Coordinates</Box>
          </Box>
          <Box sx={{ marginTop: '-1rem', marginRight: '-0.5rem' }}>
            <IconButton onClick={onClose}>
              <NavigateBefore />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <InputComponent />
        </Box>
      </Box>
    </>
  );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'secondary.main',
          top: 64,
          height: 'calc(100% - 64px)',
          width: '40%',
          // @ts-ignore
          scrollbarColor: `${theme.palette.gray200} ${theme.palette.secondary.main}`,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '10px',
            padding: '3px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'secondary.main',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray200',
            border: `2px solid ${theme.palette.secondary.main}`,
            borderRadius: '5px',
          },
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="persistent"
    >
      {content}
    </Drawer>
  );
};
