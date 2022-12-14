import styled from '@emotion/styled';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import NavigateNext from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import { useTheme } from '@mui/material/styles';

const DashboardNavbarRoot = styled(AppBar)(({ theme }: { theme: any }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

type DashboardNavbarProps = {
  isSidebarOpen: boolean;
  onSidebarOpen: () => void;
  onSidebarClose: () => void;
};

export const DashboardNavbar = ({
  isSidebarOpen,
  onSidebarOpen,
  onSidebarClose,
}: DashboardNavbarProps) => {
  const theme = useTheme();

  return (
    <>
      <DashboardNavbarRoot theme={theme}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
            backgroundColor: 'primary.main',
            color: 'secondary.main',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', color: 'primary.main', gap: '1rem' }}>
            <IconButton
              onClick={isSidebarOpen ? onSidebarClose : onSidebarOpen}
              sx={{
                display: 'inline-flex',
                color: 'secondary.main',
              }}
            >
              {isSidebarOpen ? <NavigateBefore /> : <NavigateNext />}
            </IconButton>
          </Box>
          <Box sx={{
                fontStyle: 'italic',
              }}><Typography>Anirudh Umarji</Typography></Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography>Computational Geometry</Typography>
          </Box>
          <Box
              sx={{
                fontSize: '0.75rem',
                fontStyle: 'italic',
              }}
            >
              <Typography>Undergraduate Research</Typography>
            </Box>
          <Box sx={{ width: '276.333px', height: '40px' }} />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};
