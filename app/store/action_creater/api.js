import { createAction } from "@reduxjs/toolkit";
export const apiCallBegan=createAction('api/callBegan')
export const baseURL=process.env.local.NEXT_PUBLIC_API_URL