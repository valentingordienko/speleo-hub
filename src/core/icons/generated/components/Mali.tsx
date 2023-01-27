import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mali.svg';

export function Mali(props: TBaseProps) {
  return (
    <Icon {...props} name="Mali">
      <SVG />
    </Icon>
  );
}
