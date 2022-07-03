import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Table, useMantineTheme } from "@mantine/core";

const users = Array(10)
  .fill(null)
  .map(() => ({
    givenName: "Jhon",
    familyName: "Doe",
    scores: {
      q1: 50,
      q2: 25,
      q3: 75,
    },
  }));

const Home: NextPage = () => {
  const theme = useMantineTheme();

  return (
    <Layout>
      <div>
        <Table verticalSpacing="xl" fontSize="md" highlightOnHover>
          <thead>
            <tr className={`bg-[${theme.colors.dark[5]}]/50`}>
              <th>Name</th>
              <th>Questionnaire 1</th>
              <th>Questionnaire 2</th>
              <th>Questionnaire 3</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="cursor-pointer transition-colors duration-200"
              >
                <td>
                  {user.familyName} {user.givenName}
                </td>
                <td>{user.scores.q1}</td>
                <td>{user.scores.q2}</td>
                <td>{user.scores.q3}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default Home;
