import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Belize.svg';

export function Belize(props: TBaseProps) {
  return (
    <Icon {...props} name="Belize">
      <SVG />
    </Icon>
  );
}
