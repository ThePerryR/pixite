import { createClient, LiveList } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
type Storage = {
 pixels: LiveList<string[]>;
};
type Presence = {
    cursor: { x: number; y: number } | null;
};
  

const client = createClient({
  publicApiKey: "pk_dev_M24RSe2MeRrQ91dUHpGTfCEc_eMy2ohe_6CGrO26qBGSVUsQBu7qguure-NHrDMm",
});

export const {
    suspense: {
      RoomProvider,
      useStorage,
      useMutation
      /* exported hooks */
    },
  } = createRoomContext<Presence, Storage>(client);