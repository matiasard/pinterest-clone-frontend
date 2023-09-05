// import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from './../../store/authStore';
import { loginRequest, productIdRequest } from './../../api/auth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore(state => state.setProfile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.currentTarget.elements[0].value;
    const password = e.currentTarget.elements[1].value;
    const resLogin = await loginRequest(email, password);

    console.log(resLogin.data);
    setToken(resLogin.data.accessTokenKey);
    setProfile(resLogin.data.user)

    navigate("/home", { replace: true });
  };

  const onLogin =
  //  async 
   () => {
    console.log("login");
    // const resProductId = await productIdRequest(2);
    // console.log(resProductId)
    navigate("/home", { replace: true });
  };

  return (
    <div className="container animate__animated animate__fadeIn">
      <h2>Login</h2>
      {/* <hr />
      <button className="" onClick={onLogin}>
        Home
      </button>
      <hr />
      <br /> */}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Login Action</button>
      </form>
    </div>
  );
   
  
  // return (
  //       <div className="container login-container">
  //           <div className="row">
  //               <div className="col-md-6 login-form-1">
  //                   <h3>Ingreso</h3>
  //                   <form>
  //                       <div className="form-group mb-2">
  //                           <input 
  //                               type="text"
  //                               className="form-control"
  //                               placeholder="Correo"
  //                           />
  //                       </div>
  //                       <div className="form-group mb-2">
  //                           <input
  //                               type="password"
  //                               className="form-control"
  //                               placeholder="Contraseña"
  //                           />
  //                       </div>
  //                       <div className="form-group mb-2">
  //                           <input 
  //                               type="submit"
  //                               className="btnSubmit"
  //                               value="Login" 
  //                           />
  //                       </div>
  //                   </form>
  //               </div>

  //               <div className="col-md-6 login-form-2">
  //                   <h3>Registro</h3>
  //                   <form>
  //                       <div className="form-group mb-2">
  //                           <input
  //                               type="text"
  //                               className="form-control"
  //                               placeholder="Nombre"
  //                           />
  //                       </div>
  //                       <div className="form-group mb-2">
  //                           <input
  //                               type="email"
  //                               className="form-control"
  //                               placeholder="Correo"
  //                           />
  //                       </div>
  //                       <div className="form-group mb-2">
  //                           <input
  //                               type="password"
  //                               className="form-control"
  //                               placeholder="Contraseña" 
  //                           />
  //                       </div>

  //                       <div className="form-group mb-2">
  //                           <input
  //                               type="password"
  //                               className="form-control"
  //                               placeholder="Repita la contraseña" 
  //                           />
  //                       </div>

  //                       <div className="form-group mb-2">
  //                           <input 
  //                               type="submit" 
  //                               className="btnSubmit" 
  //                               value="Crear cuenta" />
  //                       </div>
  //                   </form>
  //               </div>
  //           </div>
  //       </div>
  //   )
};
