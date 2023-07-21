import { toSvg } from "jdenticon";
import { useEffect, useState } from "react";

export default function UserAvatar({
  avatarId,
  size,
}: {
  avatarId: string | any;
  size: number;
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: toSvg(avatarId, size),
      }}
    ></div>
  );
}
