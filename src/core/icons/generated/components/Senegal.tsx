import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Senegal.svg';

export function Senegal(props: TProps) {
  return (
    <Icon {...props} name="Senegal">
      <SVG />
    </Icon>
  );
}
