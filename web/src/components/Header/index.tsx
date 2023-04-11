export function Header() {
  return (
    <header>
      <nav className="mt-[42px] ml-[47px] flex flex-row gap-[159px] items-center">
        <h1 className="font-sans font-bold text-orange-500 text-3xl">Moovy</h1>
        <ul className="flex gap-[81px] text-base font-sans font-bold text-black ">
          <li className="hover:text-orange-500">Search</li>
          <li className="hover:text-orange-500">My Library</li>
        </ul>
      </nav>
    </header>
  );
}
