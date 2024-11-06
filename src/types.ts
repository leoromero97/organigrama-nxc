import type { SeniorityPropTypes } from "./components/Seniority/types";

export type DataPropTypes = {
  id: string;
  name?: string;
  clients?: {
    id?: string;
    name?: string;
    imageUrl?: string;
  }[];
  role?: string;
  imageUrl?: string;
  seniority?: SeniorityPropTypes["types"];
  discipline?: string;
  projectName?: string;
  teamOwner?: string;
  leadNxC?: string;
  isTeamOwner?: boolean;
  isLeadNxC?: boolean;
};

export type NotionNameType = {
  title: {
    type?: string;
    text?: {
      content?: string;
      link?: null;
    };
    plain_text?: string;
    href?: null;
  }[];
};

export type NotionRolType = {
  select: {
    name?: string;
  };
};

export type NotionClientType = {
  relation: {
    id?: string;
  }[];
};

export type NotionImageType = {
  files: {
    id?: string;
    file: {
      url?: string;
      expiry_time?: string;
    };
  }[];
};

export type NotionDisciplineType = {
  select: {
    name?: string;
  };
};

export type NotionSeniorityType = {
  select: {
    name?: string;
  };
};

export type NotionClientPageType = {
  id?: string;
  icon?: {
    file?: {
      url?: string;
    };
  };
  properties?: {
    Nombre: NotionNameType;
  };
};

export type NotionProjectsType = {
  id?: string;
  multi_select: {
    id: string;
    name: string;
    color?: string;
  }[];
};

export type NotionTeamOwnerType = {
  id?: string;
  type?: string;
  rich_text: {
    type?: string;
    plain_text: string;
  }[];
};

export type PageDataPropTypes = {
  properties?: {
    Nombre: NotionNameType;
    Rol: NotionRolType;
    Cliente: NotionClientType;
    Image: NotionImageType;
    Seniority: NotionSeniorityType;
    Disciplina: NotionDisciplineType;
    Proyectos: NotionProjectsType;
    TeamOwner: NotionTeamOwnerType;
    LeadNxC: NotionTeamOwnerType;
  };
};
