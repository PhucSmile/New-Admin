import React from 'react';
import { ConfigProvider } from 'antd';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { queryClient } from 'lib/react-query';
import { GlobalStyle } from 'styles/globalStyle';
import { theme } from 'styles/theme';
import { AppRoutes } from 'routes';
import { i18n } from 'i18n';
import { LOCALE } from 'constants/common';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/vi';
import { useAppSelector } from 'store/hooks';
import { selectCurrentLocale } from 'store/slices/appSlice';
import flatten from 'flat';
import { IntlProvider } from 'react-intl';

function App() {
  const currentLocale = useAppSelector(selectCurrentLocale);

  dayjs.locale(currentLocale);

  return (
    <ConfigProvider locale={i18n[currentLocale].antd}>
      <IntlProvider
        locale={currentLocale}
        messages={flatten(i18n[currentLocale].translation)}
      >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />

            <AppRoutes />
          </ThemeProvider>

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </IntlProvider>
    </ConfigProvider>
  );
}

export default App;
