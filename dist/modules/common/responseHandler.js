"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
const model_1 = require("./model");
exports.successResponse = (message, response, res) => {
    res.status(model_1.response_status_codes.success).send({
        status: 'success',
        message: message,
        response,
    });
};
exports.failureResponse = (message, response, res) => {
    res.status(model_1.response_status_codes.not_found).send({
        status: 'failure',
        message: message,
        response,
    });
};
exports.insufficientParameters = (res) => {
    res.status(model_1.response_status_codes.bad_request).send({
        status: 'failure',
        message: 'Insufficient parameters',
        response: {},
    });
};
