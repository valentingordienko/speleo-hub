import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Small500.svg';

export function Small500(props: TBaseProps) {
  return (
    <Icon {...props} name="Small500">
      <SVG />
    </Icon>
  );
}
