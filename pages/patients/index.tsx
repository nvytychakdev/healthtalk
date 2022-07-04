import type { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Table, useMantineTheme } from "@mantine/core";
import Gauge from "@components/modules/Gauge";

const users = Array(20)
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

  console.log(theme);

  return (
    <Layout>
      <Table
        verticalSpacing="xl"
        fontSize="md"
        sx={(theme) => {
          return {};
        }}
      >
        <thead>
          <tr className={`bg-[${theme.colors.dark[5]}]/50`}>
            <th
              className="sticky z-50 bg-[#1A1B1E] left-0"
              style={{
                minWidth: "200px",
              }}
            >
              Name
            </th>
            <th>Questionnaire 1</th>
            <th>Questionnaire 2</th>
            <th>Questionnaire 3</th>
            <th>Questionnaire 4</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="group cursor-pointer">
              <td
                className={`sticky z-50 left-0 bg-[#1A1B1E] group-hover:bg-[#25262b] transition-colors duration-200`}
              >
                {user.familyName} {user.givenName}
              </td>
              <td
                className={`group-hover:bg-[#25262b] transition-colors duration-200`}
              >
                <Gauge color="green"> {user.scores.q1} </Gauge>
              </td>
              <td
                className={`group-hover:bg-[#25262b] transition-colors duration-200`}
              >
                <Gauge color="amber"> {user.scores.q2} </Gauge>
              </td>
              <td
                className={`group-hover:bg-[#25262b] transition-colors duration-200`}
              >
                <Gauge color="red"> {user.scores.q3} </Gauge>
              </td>
              <td
                className={`group-hover:bg-[#25262b] transition-colors duration-200`}
              >
                <Gauge> {user.scores.q3} </Gauge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};

export default Home;
