import classNames from 'classnames';

import './index.css';



const Icon = ({ icon, style, className, ...rest }) => {
  // const IconComponent = icons[icon];

  return (
    <div aria-hidden className={classNames('icon', className)}>
      {icon}
    </div>
  );
};

export default Icon;