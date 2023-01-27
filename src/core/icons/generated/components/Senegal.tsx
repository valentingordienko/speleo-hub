import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Senegal.svg';

export function Senegal(props: TBaseProps) {
  return (
    <Icon {...props} name="Senegal">
      <SVG />
    </Icon>
  );
}
