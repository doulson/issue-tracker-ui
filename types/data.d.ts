export type status = "OPEN" | "IN_PROGRESS" | "CLOSED";

export interface loginInter {
  email: string;
  password: string;
}

export interface registerInter {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

declare namespace Data {
  interface userDetail {
    id: string;
    fitstname: string;
    lastname: string;
    email: string;
  }

  interface AdminUser extends userDetail {
    role: "admin";
  }

  interface issueShort {
    id: number;
    title: string;
    status: status;
  }

  interface issue extends issueShort {
    description: string;
    archieved: boolean;
    ownerId: string;
    owner: userDetail;
    totalComment: number;
  }

  interface issueComment {
    id: number;
    comment: string;
    user: userDetail;
    issue: issueShort;
  }
}
