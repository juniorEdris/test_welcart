import Image from 'next/image';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaAngleRight } from 'react-icons/fa';

const SubPages = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
      <div className=''>
        <div className='w-[100px] md:w-[230px] h-[40px]  nav-link relative danger-bg md:h-full rounded-t-lg'>
          <div className='hidden md:flex items-center  h-full px-4'>
            <span className='text-xl flex items-center'>
              <GiHamburgerMenu /> <span className='ml-3'>Top Categories</span>
            </span>
            <span className='text-xl ml-3'>
              <FiChevronDown />
            </span>
          </div>

          <div className='flex md:hidden items-center justify-center h-full px-4'>
            <span className='text-xl flex items-center'>
              <GiHamburgerMenu />
            </span>
          </div>

          <div class='dropdown'>
            <ul>
              <li class='dropdown-link'>
                <a href='#'>Link 1</a>
              </li>
              <li class='dropdown-link'>
                <a href='#'>Link 2</a>
              </li>
              <li class='dropdown-link'>
                <a href='#'>
                  Link 3<FaAngleRight />
                </a>
                <div class='dropdown second'>
                  <ul>
                    <li class='dropdown-link'>
                      <a href='#'>Link 3.1</a>
                    </li>
                    <li class='dropdown-link'>
                      <a href='#'>Link 3.2</a>
                    </li>
                    <li class='dropdown-link'>
                      <a href='#'>Link 3.3</a>
                    </li>
                    <li class='dropdown-link'>
                      <a href='#'>
                        More
                        <FaAngleRight />
                      </a>
                      <div class='dropdown second'>
                        <ul>
                          <li class='dropdown-link'>
                            <a href='#'>More Link 1</a>
                          </li>
                          <li class='dropdown-link'>
                            <a href='#'>More Link 2</a>
                          </li>
                          <li class='dropdown-link'>
                            <a href='#'>More Link 3</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class='dropdown-link'>
                <a href='#'>Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='hidden col-span-2 md:flex items-center justify-center'>
        <ul className='flex items-center justify-center sub_category text-sm'>
          <li className='flex items-center justify-center'>
            <Link href='/'>Exclusive Deals</Link>
            <span className='ml-3'>
              <FiChevronDown />
            </span>
          </li>
          <li className='flex items-center justify-center'>
            <Link href='/'>Smart Watches</Link>
            <span className='ml-3'>
              <FiChevronDown />
            </span>
          </li>
          <li className=''>
            <Link href='/'>Cell Phone</Link>
          </li>
          <li className=''>
            <Link href='/'>Headphone</Link>
          </li>
        </ul>
      </div>
      <div className='hidden md:block '>
        <div className='flex items-center justify-center cursor-pointer mb-2'>
          <div className='mx-3'>
            <Image
              src='/img/super_discount.png'
              alt=''
              height='25'
              width='25'
            />
          </div>
          <div className='flex items-center justify-center'>
            <div className=''>
              <div className='text-sm opacity-70 font-extralight'>
                Only this weekend
              </div>
              <div className='text-xl font-semibold danger-font'>
                Super Discount
              </div>
            </div>
            <span className='ml-3 text-xl'>
              <FiChevronDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPages;
