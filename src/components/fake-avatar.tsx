import { toSvg } from "jdenticon";

export default function FakeAvatar({
  avatarKey,
  size,
}: {
  avatarKey: string;
  size: number;
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: toSvg(avatarKey, size),
      }}
    ></div>
  );
}
