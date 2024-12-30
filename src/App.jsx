import { useForm } from 'react-hook-form'

function App() {

  const {register, handleSubmit} = useForm();

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit(data=>console.log(data))} className='w-60 h-52 items-center p-4 border border-zinc-400' action="" >
        <input {...register('name')} className='m-2 border border-zinc-400' type="text" placeholder='Name' />
        <input {...register('email')} className='m-2 border border-zinc-400' type="email" placeholder='email' />
        <div>
          <input type="submit" className='m-2 px-3 py-2 rounded-md text-sm bg-zinc-400'/>
        </div>
      </form>
    </div>
    
  )
}

export default App