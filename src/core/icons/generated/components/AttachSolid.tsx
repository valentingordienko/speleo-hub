import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AttachSolid.svg';

export function AttachSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AttachSolid">
      <SVG />
    </Icon>
  );
}
