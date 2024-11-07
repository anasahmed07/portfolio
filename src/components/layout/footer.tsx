
const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm text-gray-400">
        © 2024, All Rights Reserved
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
        <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
        <a href="#" className="text-sm text-gray-400 hover:text-white">Cookies Settings</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer