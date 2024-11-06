import React from "react";
import Avatar from "../Avatar";
import Chip from "../Chip";
import Client from "../Client";
import Seniority from "../Seniority";
import Role from "../Role";
import Referent from "../Referent";
import type { CardCollaboratorPropTypes } from "./types";

export default function CardCollaborator({
  imageUrl,
  name,
  seniority,
  role,
  clients,
  projectName,
  teamOwner,
  leadNxC,
  id,
  isTeamOwner,
}: Readonly<CardCollaboratorPropTypes>) {
  return (
    <article
      id={id}
      key={id}
      className="w-full flex flex-col max-w-96 p-4 rounded-3xl gap-4 shadow-card"
      style={{
        background:
          "linear-gradient(178.37deg, #B42682 -10.31%, #222222 22.49%)",
      }}
    >
      {isTeamOwner && <Chip label="Team Owner" variant="teamOwner" />}
      <header className="w-full flex items-center gap-3 justify-between">
        {name && (
          <Avatar
            imageSrc={imageUrl}
            imageAlt={"Foto de".concat(" ", name)}
            name={name}
          />
        )}
        <Seniority types={seniority} />
      </header>
      {role && (
        <div className="flex flex-col gap-2">
          <Role name={role} projectName={projectName} />
        </div>
      )}
      {(!!teamOwner || !!leadNxC) && (
        <div className="gap-4 w-full flex flex-row items-center justify-start">
          <Referent labelType="teamOwner" name={teamOwner} />
          <Referent labelType="leadNxC" name={leadNxC} />
        </div>
      )}
      <div className="flex gap-2">
        {!!clients &&
          clients?.map((client) => (
            <Client
              key={client.id}
              imageAlt={"Imagen del cliente".concat(" ", client?.name ?? "")}
              imageSrc={client?.imageUrl}
            />
          ))}
      </div>
    </article>
  );
}
