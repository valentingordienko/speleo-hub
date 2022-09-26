import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GPSSolid.svg';

export function GPSSolid(props: TProps) {
  return (
    <Icon {...props} name="GPSSolid">
      <SVG />
    </Icon>
  );
}
