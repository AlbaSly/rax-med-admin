import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import Swal from "sweetalert2";
import { IRejectResponse } from "../interfaces";

export namespace APIHandlers {

    export function HandleHtppErrorResponse(error: HttpErrorResponse) {
        const errorResponse: IRejectResponse = error.error;
        Swal.fire('Error', errorResponse.msg, 'error');
        return throwError(() => errorResponse);
    }
}