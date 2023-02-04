export interface ProfilePicProps {
  src: string;
}

function ProfilePic({ src }: ProfilePicProps) {
  return <img className="rounded-full w-80" src={src} />;
}

export default ProfilePic;
