"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoError = exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
const model_1 = require("./model");
exports.successResponse = (message, data, res) => {
    res.status(model_1.response_status_codes.success).json({
        status: 'success',
        messgae: message,
        data
    });
};
exports.failureResponse = (message, data, res) => {
    res.status(model_1.response_status_codes.success).json({
        status: 'failure',
        messgae: message,
        data
    });
};
exports.insufficientParameters = (res) => {
    res.status(model_1.response_status_codes.bad_request).json({
        status: 'failure',
        messgae: 'Insufficient parameters',
        data: {}
    });
};
exports.mongoError = (err, res) => {
    res.status(model_1.response_status_codes.internal_server_error).json({
        status: 'failure',
        messgae: 'MongoDB error',
        data: err
    });
};
