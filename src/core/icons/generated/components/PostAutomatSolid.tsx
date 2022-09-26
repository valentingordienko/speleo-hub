import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PostAutomatSolid.svg';

export function PostAutomatSolid(props: TProps) {
  return (
    <Icon {...props} name="PostAutomatSolid">
      <SVG />
    </Icon>
  );
}
