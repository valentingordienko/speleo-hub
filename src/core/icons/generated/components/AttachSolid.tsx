import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AttachSolid.svg';

export function AttachSolid(props: TProps) {
  return (
    <Icon {...props} name="AttachSolid">
      <SVG />
    </Icon>
  );
}
