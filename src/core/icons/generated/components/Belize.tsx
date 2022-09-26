import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Belize.svg';

export function Belize(props: TProps) {
  return (
    <Icon {...props} name="Belize">
      <SVG />
    </Icon>
  );
}
