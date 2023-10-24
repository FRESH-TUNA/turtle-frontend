export default {

    statusCode: (res) => {
        return res.data.code;
    },

    data: (res) => {
        return res.data.data;
    },

    statusCodeFromErr: (err) => {
        return err.response.code;
    },

    dataFromErr: (err) => {
        return err.response.data;
    },

    configFromErr: (err) => {
        return err.response.config;
    }
};
