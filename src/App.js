import AppRouter from "./components/routers/AppRouter";
// import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./scss/main.scss";
import JeComment from "./components/common/JeComment/JeComment";
import JeTypeUser from "./components/common/JeTypeUser";
import JeBox from "./components/common/JeBox/JeBox";

const userLogued = {
  idUser: 1,
  name: "Jerson Omar",
  lastname: "Ramírez Ortiz",
  birthday: new Date(),
  email: "juamkoo@gmail.com",
  typeUser: {
    idTypeUser: 2,
    name: "Administrador",
    sigla: "adm",
  },
};

const cite = {
  idCite: 1,
  description: "Mi primera cita",
  user: {
    idUser: 1,
    name: "Jerson Omar",
    lastname: "Ramírez Ortiz",
    birthday: new Date(),
    email: "juamkoo@gmail.com",
    typeUser: {
      idTypeUser: 2,
      name: "Administrador",
      sigla: "adm",
    },
  },
  comments: [
    {
      user: {
        idUser: 1,
        name: "Jerson Omar",
        lastname: "Ramírez Ortiz",
        birthday: new Date(),
        email: "juamkoo@gmail.com",
        typeUser: {
          idTypeUser: 2,
          name: "Administrador",
          sigla: "adm",
        },
      },
      comment: {
        idComment: 1,
        description: "Comentario",
        date: "12-06-2020 a las 5:00 am",
        likes: 5,
        count: 2,
        idParentComment: null,
      },
      commentsChild: [
        {
          user: {
            idUser: 1,
            name: "Juanma Omar",
            lastname: "Ramírez Ortiz",
            birthday: new Date(),
            email: "juamkoo@gmail.com",
            typeUser: {
              idTypeUser: 2,
              name: "Administrador",
              sigla: "adm",
            },
          },
          comment: {
            idComment: 2,
            description: "Comentario Hijo",
            date: "12-06-2020 a las 5:00 am",
            likes: 5,
            count: 2,
            idParentComment: 1,
          },
        },
      ],
    },
  ],
};

function App() {
  //   return <AppRouter />;
  return (
    <>
      <JeComment>
        <JeComment.Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
          alt="Usuario"
        />
        <JeComment.Content
          userData={{
            id: 1,
            name: "Jerson Ramírez Ortiz",
            gmail: "juamkoo@gmail.com",
          }}
          comment={[
            {
              user: {
                name: "Juan Manuel",
                typeUser: "adm",
                id: "1505",
                img:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU",
              },
              id: 1515,
              idCita: 1,
              text: "La vida es así de caprichoza",
              date: "14/12/2020 a las 06:25am",
            },
          ]}
          //   commentsChild={[
          //     {
          //       user: {
          //         name: "Juan Manuel 2 ",
          //         typeUser: "adm",
          //         id: "1505",
          //         img:
          //           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU",
          //       },
          //       data: {
          //         id: 1515,
          //         text: "La vida es así de caprichoza",
          //         date: "14/12/2020 a las 06:25am",
          //         likes: 5,
          //       },
          //     },
          //   ]}
        >
          {[1, 2, 3].map((s, i) => {
            return (
              <JeComment key={i}>
                <JeComment.Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
                  alt="Usuario"
                />
                <JeComment.Content>
                  <JeComment.MetaData
                    name="Juan Manuel"
                    typeUser={<JeTypeUser isIcon />}
                    date="14/12/2020 a las 06:25am"
                    text={
                      <JeComment.Text>
                        Nose que comentar, pero lo estoy intentando como nunca
                        lo había hecho. La vida es muy dura para aceptarlo.
                      </JeComment.Text>
                    }
                  />
                  <JeComment.Action isLike />
                </JeComment.Content>
              </JeComment>
            );
          })}
          <JeComment.Box />
        </JeComment.Content>
      </JeComment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
