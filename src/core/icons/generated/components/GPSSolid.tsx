import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GPSSolid.svg';

export function GPSSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GPSSolid">
      <SVG />
    </Icon>
  );
}
