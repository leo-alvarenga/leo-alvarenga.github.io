import { useMemo } from "react";
import {
  Page,
  Profile,
  SkillList,
  ProjectList,
  ContactList,
  ContentItemInfo,
} from "../../components";

function Home() {
  const contents: ContentItemInfo[] = useMemo(
    () => [
      {
        label: "page.home.contents.profile",
        id: "profile",
      },
      {
        label: "page.home.contents.skills",
        id: "skills",
      },
      {
        label: "page.home.contents.projects",
        id: "projects",
      },
    ],
    []
  );

  return (
    <Page contents={contents}>
      <>
        <Profile />
        <SkillList />
        <ContactList />
        <ProjectList />
      </>
    </Page>
  );
}

export default Home;
