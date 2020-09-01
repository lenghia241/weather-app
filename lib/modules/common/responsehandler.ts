import { Response } from 'express';
import { response_status_codes } from './model';

export const successResponse = (
	message: string,
	response: any,
	res: Response
): void => {
	res.status(response_status_codes.success).send({
		status: 'success',
		message: message,
		response,
	});
};

export const failureResponse = (
	message: string,
	response: any,
	res: Response
): void => {
	res.status(response_status_codes.not_found).send({
		status: 'failure',
		message: message,
		response,
	});
};

export const insufficientParameters = (res: Response): void => {
	res.status(response_status_codes.bad_request).send({
		status: 'failure',
		message: 'Insufficient parameters',
		response: {},
	});
};
