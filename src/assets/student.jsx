function Student(){
        
  return (
    <div>
      <h2>Sign Up / Register</h2>

      <form onSubmit={handleSubmit}>
        <div>
        Full Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
        />
        </div>
        
        <div>
        Username:
        <input
          type="text"
          name="username"
          onChange={handleChange}
        />
        </div>
        
        <div>
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
        />
        </div>
      
        <div>
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
        />
        </div>
        
        <button type="submit">
          Sign Up / Register
        </button>

      </form>
    </div>
  );
}

export default Student;