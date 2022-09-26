import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Martinique.svg';

export function Martinique(props: TProps) {
  return (
    <Icon {...props} name="Martinique">
      <SVG />
    </Icon>
  );
}
