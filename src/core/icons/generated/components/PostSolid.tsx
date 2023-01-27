import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PostSolid.svg';

export function PostSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PostSolid">
      <SVG />
    </Icon>
  );
}
