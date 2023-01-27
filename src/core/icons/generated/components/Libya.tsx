import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Libya.svg';

export function Libya(props: TBaseProps) {
  return (
    <Icon {...props} name="Libya">
      <SVG />
    </Icon>
  );
}
