import React from 'react';
import Image from 'next/image';
import { layout, colors, common, components } from '@/styles/designSystem';
import Container from './common/Container';
import Divider from './common/Divider';

const Footer = () => {
  return (
    <footer className={`${layout.section} ${colors.bg.dark} ${colors.text.white}`}>
      <Container>
        {/* Logo with lines */}
        <div className="mb-12 lg:mb-0 lg:mr-16 flex items-center justify-center relative">
          <Divider variant="short" className="mr-4" />
          <Image src="/assets/logo.svg" alt="MK Logo" width={84} height={33} />
          <Divider variant="short" className="ml-4" />
        </div>

        <div className="flex justify-center mt-[44px]">
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row text-left gap-50">
            {/* About Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className={common.sectionTitle}>ABOUT</h3>
              <ul className="space-y-3">
                <li><a href="#" className={common.navLink}>SHOP</a></li>
                <li><a href="#" className={common.navLink}>PLAN MY KITCHEN</a></li>
                <li><a href="#" className={common.navLink}>ABOUT US</a></li>
                <li><a href="#" className={common.navLink}>GALLERY</a></li>
              </ul>
            </div>

            {/* Service Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className={common.sectionTitle}>SERVICE</h3>
              <ul className="space-y-3">
                <li><a href="#" className={common.navLink}>FAQ</a></li>
                <li><a href="#" className={common.navLink}>CONTACT</a></li>
                <li><a href="#" className={common.navLink}>HOW TO BUY</a></li>
                <li><a href="#" className={common.navLink}>DOWNLOADS</a></li>
              </ul>
            </div>

            {/* Info Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className={common.sectionTitle}>INFO</h3>
              <ul className="space-y-3">
                <li><a href="#" className={common.navLink}>DELIVERY</a></li>
                <li><a href="#" className={common.navLink}>TERMS</a></li>
                <li><a href="#" className={common.navLink}>PRIVACY</a></li>
              </ul>
            </div>

            {/* Follow Column */}
            <div className="mb-8 sm:mb-0">
              <h3 className={common.sectionTitle}>FOLLOW</h3>
              <div className="flex gap-4">
                <div className={components.socialIcon}>
                  <Image src="/assets/facebook.svg" alt="Facebook" width={20} height={20} className="invert" />
                </div>
                <div className={components.socialIcon}>
                  <Image src="/assets/twitter.svg" alt="Twitter" width={20} height={20} className="invert" />
                </div>
                <div className={components.socialIcon}>
                  <Image src="/assets/insta.svg" alt="Instagram" width={20} height={20} className="invert" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className={common.copyright}>Copyright Online MTC Home Kitchens 2018 - All rights reserved.</p>
          <p className={common.copyright}>Responsive website design, Development & Hosting by mtc.</p>
        </div>
        <Divider className="mt-8" />
      </Container>
    </footer>
  );
};

export default Footer;