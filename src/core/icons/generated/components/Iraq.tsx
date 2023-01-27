import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Iraq.svg';

export function Iraq(props: TBaseProps) {
  return (
    <Icon {...props} name="Iraq">
      <SVG />
    </Icon>
  );
}
