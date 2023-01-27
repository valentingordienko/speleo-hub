import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Martinique.svg';

export function Martinique(props: TBaseProps) {
  return (
    <Icon {...props} name="Martinique">
      <SVG />
    </Icon>
  );
}
