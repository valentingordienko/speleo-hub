import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PostSolid.svg';

export function PostSolid(props: TProps) {
  return (
    <Icon {...props} name="PostSolid">
      <SVG />
    </Icon>
  );
}
