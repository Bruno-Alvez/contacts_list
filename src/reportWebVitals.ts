import { ReportCallback } from 'web-vitals';
import { getCLS, getFID, getFCP, getLCP } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((webVitals) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
    });
  }
};

export default reportWebVitals;