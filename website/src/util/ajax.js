/* eslint-disable no-param-reassign, no-console */
import axios, { CancelToken } from "axios";

const ajax = {};
export default ajax;

export function request(method, path, data, cancellable = data) {
    if (arguments.length === 3 && typeof data === "boolean") {
        cancellable = data;
        data = undefined;
    }
    if (!cancellable) {
        if (method === "GET" && data) {
            return axios
                .get(`/api${path}`, {
                    params: data,
                })
                .catch(err => {
                    console.log(err.response);
                    throw err;
                });
        }
        return axios({
            method,
            url: `/api${path}`,
            data,
        }).catch(err => {
            console.log(err.response);
            throw err;
        });
    }
    let cancel;
    return {
        req:
            method === "GET" && data
                ? axios
                      .get(`/api${path}`, {
                          params: data,
                          cancelToken: new CancelToken(c => {
                              cancel = c;
                              return cancel === c;
                          }),
                      })
                      .catch(err => {
                          console.log(err.response);
                          throw err;
                      })
                : axios({
                      method,
                      url: `/api${path}`,
                      data,
                      cancelToken: new CancelToken(c => {
                          cancel = c;
                          return cancel === c;
                      }),
                  }).catch(err => {
                      console.log(err.response);
                      throw err;
                  }),
        cancel: () => cancel(),
    };
}

ajax.request = request;
