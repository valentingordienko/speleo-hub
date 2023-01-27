import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FaceIDSolid.svg';

export function FaceIDSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FaceIDSolid">
      <SVG />
    </Icon>
  );
}
