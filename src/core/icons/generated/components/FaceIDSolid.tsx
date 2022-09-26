import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FaceIDSolid.svg';

export function FaceIDSolid(props: TProps) {
  return (
    <Icon {...props} name="FaceIDSolid">
      <SVG />
    </Icon>
  );
}
