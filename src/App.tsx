import journee_logo from './assets/journee_logo.svg' 
import backgroundImage from './assets/background_image.jpg'

function App() {
  return (
    <>
      <div style={{ 
        padding: 0, 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        display: 'flex',
        height: '100vh', 
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style = {{display :"flex" ,flexDirection :"column", alignItems :"center", gap: 100}}>
             <img src={journee_logo} alt="Journee Logo" width={200} style={{ padding: 32 }} />
        <div style={{ 
        padding: 40, 
        backgroundColor: '#FFFFFF', 
        height: 400, 
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 100
      }}>
        <div style={{ 
        gap: 16
      }}>
            <h1 style={{ fontSize: 32, fontWeight: 'bold', color: '#000000' , fontFamily: 'plus-jakarta-sans, sans-serif',
}}>Welcome Back</h1>
            <p style={{ fontSize: 16, color: '#666666',  fontFamily: 'plus-jakarta-sans, sans-serif',
 }}>Log in to your account to continue</p>
          </div>
           <input 
               type="text" 
               placeholder="Email" 
                style={{
                width: '80%',
                height: 32,
                fontFamily: 'plus-jakarta-sans, sans-serif',               
                padding: 10,
                fontSize: 16,
                borderRadius: 16,
                border: '0.5px solid #CCCCCC'
              }}
            />
            <input
              type="password"
              placeholder="Password"
               style={{
                fontFamily: 'plus-jakarta-sans, sans-serif',
                width: '80%',
                height: 32,
                padding: 10,
                fontSize: 16,
                borderRadius: 16,
                border: '0.5px solid #CCCCCC'
              }}
            />
            <button
              style={{
                width: '82%',
                height: 60,
                backgroundColor: '#000000',
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 'bold',
                border: 'none',
                borderRadius: 16,
                cursor: 'pointer',
                fontFamily: 'plus-jakarta-sans, sans-serif',
              }}
            >
              Log In
            </button>
            <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
               <p style={{ fontSize: 16, color: '#666666',  fontFamily: 'plus-jakarta-sans, sans-serif',
 }}>Don't have an account?</p>
      <a href="/about" style={{ fontSize: 16, color: '#9747FF',  fontFamily: 'plus-jakarta-sans, sans-serif'}}>Sign up</a>
      
    
    </div>
           
          </div>
          </div>
      </div>
      
    </>
  )
}

export default App;