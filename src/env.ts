const find = (name: string, required = true): string | undefined => {
    let value: string | undefined;

    if (import.meta.env.DEV) {
        value = import.meta.env[`VITE_APP_${name}`];
    } else {
        value = import.meta.env[`VITE_APP_${name}`] || (window as any).env?.[`VITE_APP_${name}`];
        if (value) {
            value = value.trim().length ? value.trim() : undefined;
        }
    }

    if (required && (!value || value === `{{${name}}}`)) {
        throw new Error(`Environment variable not set: ${name}`);
    }

    return value;
};

const env = {
    PROD: import.meta.env.PROD,
    DEV: import.meta.env.DEV,
    BASE_URL: import.meta.env.BASE_URL,
    AWS_ENDPOINT_PREFIJO: find('API_AWS_ENDPOINT_PREFIJO')
};

export default env;
