import supabase from '../utils/supabase';

export default async function Home() {
  const { data } = await supabase.from('todos').select('*')
  return (
    <pre className='bg-black-500'>{JSON.stringify(data, null, 2)}</pre>
  )
}
