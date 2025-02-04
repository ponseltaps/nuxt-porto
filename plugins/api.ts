export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig();
  
    // Fungsi fetch dengan base URL dari environment variable
    const apiFetch = (url: string, options: any = {}) => {
      const baseURL = runtimeConfig.public.apiBaseUrl;
      return fetch(`${baseURL}${url}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
    };
  
    return {
      provide: {
        apiFetch,
      },
    };
  });