import { status, Data } from "@/types/data";

const baseUrl = `${process.env.API_URL}/issue`;
export const IssueServices = {
  getAll() {
    return fetch(`${baseUrl}`, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => d.data as Data.issue)
      .catch((err) => {
        throw new Error(err);
      });
  },
  getOne(id: number) {
    return fetch(`${baseUrl}/detail/${id}`, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => d.data as Data.issue)
      .catch((err) => {
        throw new Error(err);
      });
  },
  getAllByOwner() {
    return fetch(`${baseUrl}/owner`, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => d.data as Data.issue)
      .catch((err) => {
        throw new Error(err);
      });
  },
  createIssue(req: Data.issue) {
    return fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((d) => d.data.token as number)
      .catch((err) => {
        throw new Error(err);
      });
  },
  updateIssue(req: Data.issue) {
    return fetch(`${baseUrl}`, {
      method: "PUT",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((d) => d.data.token as number)
      .catch((err) => {
        throw new Error(err);
      });
  },
  updateIssueStatus(id: number, req: status) {
    return fetch(`${baseUrl}/${id}/status`, {
      method: "PUT",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((d) => d.data.token as number)
      .catch((err) => {
        throw new Error(err);
      });
  },
  deleteIssue(id: number) {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => d.data.token as number)
      .catch((err) => {
        throw new Error(err);
      });
  },
};
